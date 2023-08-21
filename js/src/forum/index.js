import app from 'flarum/forum/app';
import alertEmailConfirmation from 'flarum/forum/utils/alertEmailConfirmation';
import { extend, override } from 'flarum/common/extend';
import LogInModal from 'flarum/forum/components/LogInModal';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import SignUpModal from 'flarum/forum/components/SignUpModal';

/**
 * Hits the API endpoint by calling `app.store.find('')`, which will load
 * all initial data that the user should have set.
 */
async function loadBaseApiData() {
    await app.store.find('');
}

/**
 * Hides the provided modal, and calls the `loaded` method on that modal.
 */
function closeModal(modalInstance) {
    modalInstance.hide();
    modalInstance.loaded?.call(modalInstance);
}

app.initializers.add('fof-realtimelogin', () => {
    extend(DiscussionList.prototype, 'view', function () {
        if (app.newLogin) {
            delete app.newLogin;
        }
    });

    override(SignUpModal.prototype, 'onsubmit', async function (original, e) {
        e.preventDefault();

        this.loading = true;

        const body = this.submitData();

        const payload = await app
            .request({
                url: app.forum.attribute('baseUrl') + '/register',
                method: 'POST',
                body,
                errorHandler: this.onerror.bind(this),
            })
            .catch(this.loaded.bind(this));

        if (!payload) return;

        app.store.pushPayload(payload);
        app.session.user = app.store.getById('users', payload.data.id);

        await loadBaseApiData();

        alertEmailConfirmation(app);
        app.newLogin = true;

        closeModal(this);
    });

    override(LogInModal.prototype, 'onsubmit', async function (original, e) {
        e.preventDefault();

        this.loading = true;

        const loginData = this.loginParams();

        const response = await app.session.login(loginData, { errorHandler: this.onerror.bind(this) }).catch(this.loaded.bind(this));

        if (!response) return;

        const { token, userId } = response;

        app.session.csrfToken = token;

        await loadBaseApiData();

        app.session.user = app.store.getById('users', userId);
        app.newLogin = true;

        closeModal(this);
    });
});
