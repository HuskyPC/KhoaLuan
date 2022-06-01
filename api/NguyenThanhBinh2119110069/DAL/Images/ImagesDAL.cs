using BO.Image;
using BO.Product;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Images
{
    public class ImagesDAL
    {

        DBConnection DB;
        public ImagesDAL()
        {
            DB = new DBConnection();
        }
        public bool insertImages(string ImageID, string avatar)
        {
            string procedure = "insertProductToImages";
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@ImageID", ImageID);
            com.Parameters.AddWithValue("@avatar", avatar);

            con.OpenAsync();
            var result = com.ExecuteNonQuery();

            con.CloseAsync();

            if (result > 0)
            {
                return true;
            }
            return false;
        }
        public int MaxSTTImages() {
            string procedure = "MaxSTTImages";
            List<ImageBO> productList = new List<ImageBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);

            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();
            int stt = 0;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                stt = Convert.ToInt32(dt.Rows[i]["MaxStt"].ToString());
            }
            return stt;
        }
        public string getNewImagesIDbySTT(int a)
        {
            string procedure = "getImagesIDbySTT";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@stt", a);
            SqlDataAdapter da = new SqlDataAdapter(com);

            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();
            string stt = "";
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                stt = Convert.ToString(dt.Rows[i]["ImageID"].ToString());
            }
            int id = Convert.ToInt32(stt.Substring(2, stt.Length - 2));
            id++;
            stt = "IM" + id.ToString();
            return stt;
        }
    }
}
