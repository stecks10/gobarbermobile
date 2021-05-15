import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

export default Routes = createAppContainer(
    createSwitchNavigator({
        SignIn,
        SignUp,
    })
);