import { createStackNavigator, createAppContainer } from 'react-navigation';
import RequestIdModal from './RequestIdModal';
import Home from './Home';
import Login from './Login';
import Registration from './Registration';
import ForgotPassword from './ForgotPassword';
import SuccessfulRequest from './SuccessfulRequest';
import AddRequestModal from './AddRequestModal';

const AppNavigator = createStackNavigator({

    HomeScreen:Home,
    LoginScreen:Login,
    RegistrationScreen:Registration,
    ForgotPasswordScreen:ForgotPassword,
    SuccessfulRequestScreen:SuccessfulRequest,
    AddRequestModalScreen:AddRequestModal,
    RequestIdModalScreen:RequestIdModal,

    
});

export default createAppContainer(AppNavigator);
