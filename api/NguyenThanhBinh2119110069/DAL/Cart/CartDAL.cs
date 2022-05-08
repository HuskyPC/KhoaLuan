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
        public async  Task<bool> postInsertCart(CartBO objCartBO)
        {
            string procedure = "postInsertCart";
            int stt = getMaxSTT();
            string cartID = getCartIDBySTT(stt);
            int idCart = Convert.ToInt32(cartID);
            idCart++;
            string newCartID = "CA" + idCart.ToString();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@userID", objCartBO.userID);
            com.Parameters.AddWithValue("@productID", objCartBO.productID);
            com.Parameters.AddWithValue("@cartID", newCartID);

             await con.OpenAsync();
            var KQ = com.ExecuteNonQuery();
            com.Dispose();//huy com
             await con.CloseAsync();
            if (KQ == 1)
                return true;
            else if (KQ == -1)
                return false;
            return false;
        }
        public string getCartIDBySTT(int id)
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
            string cartID="";
            if (dt.Rows != null)
            {
                for(int i=0; i < dt.Rows.Count; i++)
                {
                    cartID = Convert.ToString(dt.Rows[i]["cartID"].ToString());
                }
                
            }
           string newCartID=cartID.Substring(3);



            return newCartID;
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
            int kq=0;
            for(int i=0; i< dt.Rows.Count; i++)
            {
                kq = Convert.ToInt32(dt.Rows[i]["maxs"].ToString());
            }    
            
            return kq;
            
        }
    }
}
