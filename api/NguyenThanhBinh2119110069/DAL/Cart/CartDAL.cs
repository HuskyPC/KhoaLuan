using BO.cart;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Cart
{
    public class CartDAL
    {
        DBConnection DB;
        public CartDAL()
        {
            DB = new DBConnection();
        }
        public int getCountCart(int userID)
        {
            string procedure = "getCountCart";
            int sl = 0;
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", userID);
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();
            if (dt.Rows != null)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    sl = Convert.ToInt32(dt.Rows[i]["tong"].ToString());
                }
                return sl;
            }
            else return 0;
        }
        public async Task<bool> postInsertCart(CartBO objCartBO)
        {
            string procedure = "postInsertCart";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", objCartBO.userID);
            com.Parameters.AddWithValue("@productID", objCartBO.productID);
            com.Parameters.AddWithValue("@cartID", objCartBO.cartID);
            com.Parameters.AddWithValue("@quantity", objCartBO.quantity);

            await con.OpenAsync();
            var result = com.ExecuteNonQuery();
            await con.CloseAsync();
            if (result > 0)
            {
                return true;
            }
            return false;
        }
        public int getCartIDBySTT(int id)
        {
            string procedure = "getCartIDBySTT";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@stt", id);

            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);
            com.Dispose();//huy com
            com.Clone();
            string cartID = "";
            if (dt.Rows != null)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    cartID = Convert.ToString(dt.Rows[i]["cartID"].ToString());
                }

            }
            int newid = Convert.ToInt32(cartID.Substring(2, cartID.Length - 2));




            return newid;
        }
        public int getMaxSTT()
        {
            string procedure = "getMaxSTT";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);
            com.Dispose();//huy com
            com.Clone();
            int kq = 0;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                kq = Convert.ToInt32(dt.Rows[i]["maxs"].ToString());
            }

            return kq;

        }
        public async Task<bool> isExitsCart(int userid, string priductID)
        {
            string procedure = "isExitsCart";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", userid);
            com.Parameters.AddWithValue("@productID", priductID);

            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            await con.OpenAsync();
            da.Fill(dt);
            
            await con.CloseAsync();
            if (dt.Rows.Count!=0)
            {
                return true;
            }
            
            return false;
        }
        public int getCountItemCartByUsertID(int userid)
        {
            string procedure = "getCountItemCartByUsertID";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", userid);
           

            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);
            int sl=0;
            con.Close();
            for(int i=0; i< dt.Rows.Count; i++)
            {
                sl += Convert.ToInt32(dt.Rows[i]["quantity"].ToString());
            }

            return sl;
        }
        public List<CartBO> getItemCardByUserID(int userid)
        {
            string procedure = "getItemCardByUserID";
            List<CartBO> listCart = new List<CartBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", userid);


            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);
            int sl = 0;
            con.Close();
            CartBO cartitem;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                cartitem = new CartBO();
                cartitem.cartID = Convert.ToString(dt.Rows[i]["cartID"].ToString());
                cartitem.productID = Convert.ToString(dt.Rows[i]["productID"].ToString());
                cartitem.quantity = Convert.ToInt32(dt.Rows[i]["quantity"].ToString());
                listCart.Add(cartitem);
            }

            return listCart;
        }
        public async Task<bool> updateQuantityCart(int userid, string priductID ,int quantity)
        {
            string procedure = "updateQuantityCart";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", userid);
            com.Parameters.AddWithValue("@productID", priductID);
            com.Parameters.AddWithValue("@quantity", quantity);


           
            await con.OpenAsync();
            var result = com.ExecuteNonQuery();
            await con.CloseAsync();
            if (result> 0)
            {
                return true;
            }

            return false;
        }
        public int getQuantityItemCartByUserProduct(int userid, string productid)
        {
            string procedure = "getQuantityItemCartByUserProduct";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", userid);
            com.Parameters.AddWithValue("@productID", productid);
  

            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);
            int sl = 0;
            con.Close();
            
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                sl  = Convert.ToInt32(dt.Rows[i]["quantity"].ToString());
              
            }

            return sl;
        }
        public async Task<bool> deleteCartItem( string cartid)
        {
            string procedure = "deleteCartitem";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@cartID", cartid);

            await con.OpenAsync();
            var result = com.ExecuteNonQuery();
            await con.CloseAsync();
            if (result > 0)
            {
                return true;
            }

            return false;
        }
    }
}
