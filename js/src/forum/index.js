import app from 'flarum/forum/app';
import alertEmailConfirmation from 'flarum/forum/utils/alertEmailConfirmation';
import { extend, override } from 'flarum/common/extend';
import LogInModal from 'flarum/forum/components/LogInModal';
import DiscussionList from 'flarum/forum/components/DiscussionList';
import SignUpModal from 'flarum/forum/components/SignUpModal';

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
            app.store.find('users', { filter: { username: data.username }, page: { limit: 1 } }).then((user) => {
                app.session.user = user[0];
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
            app.store.find('users', { filter: { username: identification }, page: { limit: 1 } }).then((user) => {
                app.session.user = user[0];
                app.store.find('').then(() => {
                    app.newLogin = true;
                    this.hide();
                    this.loaded.bind(this);
                });
            });
        });
    });
});
