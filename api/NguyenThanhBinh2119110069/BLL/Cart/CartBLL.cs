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
        public async Task<bool> postInsertCart(CartBO objCart)
        {
           return await cartDAL.postInsertCart(objCart);
            
        }
        public int getMaxSTT()
        {
            return cartDAL.getMaxSTT();
        }
        public int getCartIDBySTT(int id)
        {
            return cartDAL.getCartIDBySTT(id);
        }
        public async Task<bool> isExitsCart(int userid, string priductID)
        {
            return await cartDAL.isExitsCart(userid, priductID);
        }
        public int getCountItemCartByUsertID(int userid)
        {
            return cartDAL.getCountItemCartByUsertID(userid);
        }
    }
}
