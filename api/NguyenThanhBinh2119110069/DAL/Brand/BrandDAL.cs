using BO.Brand;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Brand
{
    public class BrandDAL
    {
        DBConnection DB;
        public BrandDAL()
        {
            DB = new DBConnection();
        }
        public List<BrandBO> getBrandSuggestion()
        {
            string procedure = "getBrandSuggestion";
            List<BrandBO> brandList = new List<BrandBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            

            SqlDataAdapter da = new SqlDataAdapter(com);


            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            BrandBO BrandDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                BrandDTO = new BrandBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                BrandDTO.brandID = Convert.ToString(dt.Rows[i]["brandID"].ToString());
                BrandDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
                BrandDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
                BrandDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
                brandList.Add(BrandDTO);
            }

            return brandList;
        }
        public List<BrandBO> getBrandIDandParentID()
        {
            string procedure = "getBrandIDandParentID";
            List<BrandBO> brandList = new List<BrandBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;



            SqlDataAdapter da = new SqlDataAdapter(com);


            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            BrandBO BrandDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                BrandDTO = new BrandBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                BrandDTO.brandID = Convert.ToString(dt.Rows[i]["brandID"].ToString());
                BrandDTO.parentID = Convert.ToString(dt.Rows[i]["parentID"].ToString());
                BrandDTO.name= Convert.ToString(dt.Rows[i]["name"].ToString());
                brandList.Add(BrandDTO);
            }

            return brandList;
        }
        public List<BrandBO> getParentByBrandId(string parentId)
        {
            string procedure = "getParentByBrandId";
            List<BrandBO> brandList = new List<BrandBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            com.Parameters.AddWithValue("@parentId", parentId);

            SqlDataAdapter da = new SqlDataAdapter(com);


            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            BrandBO BrandDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                BrandDTO = new BrandBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                BrandDTO.brandID = Convert.ToString(dt.Rows[i]["brandID"].ToString());
                BrandDTO.parentID = Convert.ToString(dt.Rows[i]["parentID"].ToString());
                BrandDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
                brandList.Add(BrandDTO);
            }

            return brandList;
        }

    }
}
