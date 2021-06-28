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

        const data = this.submitData();

        await app.request({
            url: app.forum.attribute('baseUrl') + '/register',
            method: 'POST',
            data,
            errorHandler: this.onerror.bind(this),
        });

        const user = await app.store.find('users', {
            filter: { username: data.username },
            page: { limit: 1 },
        });

        app.session.user = user[0];
        await loadBaseApiData();

        alertEmailConfirmation(app);
        app.newLogin = true;

        closeModal(this);
    });

    override(LogInModal.prototype, 'onsubmit', async function (original, e) {
        e.preventDefault();

        this.loading = true;

        const identification = this.identification();
        const password = this.password();
        const remember = this.remember();

        await app.session.login({ identification, password, remember }, { errorHandler: this.onerror.bind(this) });

        const tempUser = await app.store.find('users', {
            filter: { username: identification },
            page: { limit: 1 },
        });

        app.session.user = await app.store.find('users', tempUser[0].id());
        await loadBaseApiData();

        app.newLogin = true;

        closeModal(this);
    });
});
