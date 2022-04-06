using BO.Banner;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Banner
{
    public class BannerDAL
    {
        DBConnection DB;
        public BannerDAL()
        {
            DB = new DBConnection();
        }
        public List<BannerBO> loadBannerAll()
        {
            string procedure = "BannerAll";
            List<BannerBO> productList = new List<BannerBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            //var Category = new SqlParameter("@x",); // Tạo tham số
            //com.Parameters.Add();

            SqlDataAdapter da = new SqlDataAdapter(com);


            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            BannerBO productDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                productDTO = new BannerBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                productDTO.id = Convert.ToInt32(dt.Rows[i]["id"].ToString());
                productDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
                productDTO.imgDesktop = Convert.ToString(dt.Rows[i]["imgDesktop"].ToString());
                productDTO.urlImgDesktop = Convert.ToString(dt.Rows[i]["urlImgDesktop"].ToString());
                productDTO.imgTablet = Convert.ToString(dt.Rows[i]["imgTablet"].ToString());
                productDTO.urlImgTablet = Convert.ToString(dt.Rows[i]["urlImgTablet"].ToString());
                productDTO.imgMobile = Convert.ToString(dt.Rows[i]["imgMobile"].ToString());
                productDTO.urlImgMobile = Convert.ToString(dt.Rows[i]["urlImgMobile"].ToString());
                productDTO.url = Convert.ToString(dt.Rows[i]["url"].ToString());
                productDTO.contentUrrl = Convert.ToString(dt.Rows[i]["contentUrrl"].ToString());
                productDTO.detail1 = Convert.ToString(dt.Rows[i]["detail1"].ToString());
                productDTO.detail2 = Convert.ToString(dt.Rows[i]["detail2"].ToString());

                productList.Add(productDTO);
            }

            return productList;
        }
    }
}
