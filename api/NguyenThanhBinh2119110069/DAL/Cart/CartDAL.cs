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
            if (dt.Rows.Count != null)
            {
                for (int i = 0; i < dt.Rows.Count; i++)
                {
                    sl = Convert.ToInt32(dt.Rows[i]["tong"].ToString());
                }
                return sl;
            }
            else return 0;
        }
        //public Task<bool> postInsertCart(CartBO objCartBO)
        //{
        //    string procedure = "getBrandSuggestion";
        //    int sl = 0;
        //    SqlConnection con = DB.getConnection();
        //    SqlCommand com = new SqlCommand(procedure, con);
        //    com.CommandType = CommandType.StoredProcedure;
        //    com.Parameters.AddWithValue("@userID", objCartBO.userID);
        //    com.Parameters.AddWithValue("@productID", objCartBO.productID);
        //    com.Parameters.AddWithValue("@cartID", objCartBO.cartID);

        //    SqlDataAdapter da = new SqlDataAdapter(com);
        //    DataTable dt = new DataTable();
        //    con.Open();
        //    da.Fill(dt);//do du lieu vao datatable
        //    com.Dispose();//huy com
        //    con.Close(); for (int i = 0; i < dt.Rows.Count; i++)
        //    {
        //        sl = Convert.ToInt32(dt.Rows[i]["tong"].ToString());
        //    }
        //    return true;
        //}
    }
}
