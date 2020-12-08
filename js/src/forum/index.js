import app from 'flarum/app';
import alertEmailConfirmation from 'flarum/utils/alertEmailConfirmation';
import { extend, override } from 'flarum/extend';
import LogInModal from 'flarum/components/LogInModal';
import DiscussionList from 'flarum/components/DiscussionList';
import SignUpModal from 'flarum/components/SignUpModal';

app.initializers.add('fof-realtimelogin', () => {
    extend(DiscussionList.prototype, 'view', function () {
        if (app.newLogin) {
            delete app.newLogin;
        }
    });

    override(SignUpModal.prototype, 'onsubmit', function (original, e) {
        e.preventDefault();

        this.loading = true;

        const data = this.submitData();

        app.request({
            url: app.forum.attribute('baseUrl') + '/register',
            method: 'POST',
            data,
            errorHandler: this.onerror.bind(this),
        }).then(() => {
            app.store.find('users', data.username).then((user) => {
                app.session.user = user;
                app.store.find('' + '' + '').then(() => {
                    alertEmailConfirmation(app);
                    app.newLogin = true;
                    this.hide();
                    this.loaded.bind(this);
                });
            });
        });
    });

    override(LogInModal.prototype, 'onsubmit', function (original, e) {
        e.preventDefault();

        this.loading = true;

        const identification = this.identification();
        const password = this.password();
        const remember = this.remember();

        app.session.login({ identification, password, remember }, { errorHandler: this.onerror.bind(this) }).then(() => {
            app.store.find('users', identification).then((user) => {
                app.session.user = user;
                app.store.find('').then(() => {
                    app.newLogin = true;
                    this.hide();
                    this.loaded.bind(this);
                });
            });
        });
    });
});
