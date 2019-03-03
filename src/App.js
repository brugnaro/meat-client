// @flow
import { flow, types } from 'mobx-state-tree';
import { observer } from 'mobx-react';
import AppApi from './AppApi';

const User = types.model('User', {
  email: types.string,
  _id: types.string,
  name: types.string
});

const UserStore = types
  .model('UserStore', {
    users: types.array(User)
  }).actions(self => {
    const fetchUser = flow(function* () {
      self.users = yield AppApi.fetchUser()
    })
    return {
      fetchUser
    }
  }).create({ users: [] });

const App = () =>
  <div>
    <p>app component</p>
    <button onClick={() => UserStore.fetchUser()}>test</button>
    {UserStore.users.map((user, i) => <p key={i}>{user.name}</p>)}
  </div>

export default (observer(App))
