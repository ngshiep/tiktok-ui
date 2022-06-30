import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';


// khong can dang nhap van coi duoc
const publicRoutes = [
    {path : '/', component : Home},
    {path : '/following', component : Following},
    {path : '/profile', component : Profile},

]

// phai dang nhap moi coi duoc
const privateRoutes = [
    
]

export {privateRoutes , publicRoutes}