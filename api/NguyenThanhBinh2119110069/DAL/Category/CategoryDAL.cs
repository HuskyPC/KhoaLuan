using BO.Category;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Category
{
    public class CategoryDAL
    {
        DBConnection DB;
        public CategoryDAL()
        {
            DB = new DBConnection();
        }

        public List<CategoryBO> getCategory()
        {
            string procedure = "getCategory";
            List<CategoryBO> categoryList = new List<CategoryBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            CategoryBO categoryDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                categoryDTO = new CategoryBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                categoryDTO.categoryID = Convert.ToString(dt.Rows[i]["categoryID"].ToString());
                categoryDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());

                categoryList.Add(categoryDTO);
            }

            return categoryList;
        }
        public List<CategoryBO> getCateCreatePro()
        {
            string procedure = "getCategory";
            List<CategoryBO> categoryList = new List<CategoryBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            CategoryBO categoryDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                categoryDTO = new CategoryBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                categoryDTO.value = Convert.ToString(dt.Rows[i]["categoryID"].ToString());
                categoryDTO.label = Convert.ToString(dt.Rows[i]["name"].ToString());

                categoryList.Add(categoryDTO);
            }

            return categoryList;
        }
        public int getMaxSTTCategory()
        {
            string procedure = "getMaxSTTCategory";
            
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
                stt = Convert.ToInt32(dt.Rows[i]["maxstt"].ToString());
            }

            return stt;
        }
        public string getCategoryIDBySTT(int a)
        {
            string procedure = "getCategoryIDBySTT";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@x", a);
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            string categoryID= "";
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                categoryID = Convert.ToString(dt.Rows[i]["categoryID"].ToString());
            }

            return categoryID;
        }
        public async Task<bool> insertCategory(CategoryBO objcate)
        {
            string procedure = "createCategory";

            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@categoryID", objcate.categoryID);
            com.Parameters.AddWithValue("@name", objcate.name);
            com.Parameters.AddWithValue("@slug", objcate.slug);
            com.Parameters.AddWithValue("@status", objcate.status);
            com.Parameters.AddWithValue("@createdDate", DateTime.Now.ToString("MM/dd/yyyy"));
            com.Parameters.AddWithValue("@createdBy", 1);

            await con.OpenAsync();
            var result = com.ExecuteNonQuery();
           
             await con.CloseAsync();
            if(result > 0)
            {
                return true;
            }
            return false;
        }
    }
}
