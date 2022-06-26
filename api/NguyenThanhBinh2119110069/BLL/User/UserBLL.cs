using BLL.lib;
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
        private LibaryBLL libBLL;
        public UserBLL()
        {
            userDAL = new UserDAL();
            libBLL = new LibaryBLL();
        }
        //register
        public async Task<string> postCreateUser(UserBO objuser)
        {
            var result = await userDAL.postCreateUser(objuser);
            objuser.passwordSalt = libBLL.GetPasswordSalt();
            objuser.passwordHash = libBLL.passwordHash(objuser.password + objuser.passwordSalt);
            objuser.userID = getUserName(objuser.userName);
            var result2 = await userDAL.insertPassword(objuser);
            if (result&& result2)
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
        public int getUserName(string user)
        {
            return userDAL.getUserName(user);
        }
        public UserBO getInformationInCart(int userid)
        {
            return userDAL.getInformationInCart(userid);
        }




    }
}
