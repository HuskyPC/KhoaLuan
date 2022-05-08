using BO.User;
using DAL.User;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace BLL.User
{
    public class UserBLL

    {
        private UserDAL userDAL;
        public UserBLL()
        {
            userDAL = new UserDAL();
        }
        //register
        public async Task<string> postCreateUser(UserBO objuser)
        {
            var result = await userDAL.postCreateUser(objuser);
            if (result)
            {
                return "done";
            }
            return "fail";
        }
        public List<GetUserNameBO> getAllUserName()
        {
            List<GetUserNameBO> listUserName = userDAL.getAllUserName();
            return listUserName;
        }
        //login 
        public List<UserBO> postLoginUser(UserBO objUser)
        {
            List<UserBO> listUser = userDAL.postLoginUser(objUser);
            return listUser;
        }
    }
}
