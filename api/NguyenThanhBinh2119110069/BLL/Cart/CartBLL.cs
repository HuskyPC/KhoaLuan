using BO.cart;
using DAL.Cart;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Cart
{
    public class CartBLL
    {
        private CartDAL cartDAL;
        public CartBLL()
        {
            cartDAL = new CartDAL();
        }
        public int getCountCart(int userID)
        {
            int sl = cartDAL.getCountCart(userID);
            return sl;
        }
        public async Task<String> postInsertCart(CartBO objCart)
        {
           var sl = await cartDAL.postInsertCart(objCart);
            if (sl)
            {
                return "done";
            }
            return "fail";
        }
    }
}
