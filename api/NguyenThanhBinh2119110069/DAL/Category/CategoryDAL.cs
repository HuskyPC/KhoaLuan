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
        public List<VMListCategory> getCateCreatePro()
        {
            string procedure = "getCategory";
            List<VMListCategory> categoryList = new List<VMListCategory>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            VMListCategory categoryDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                categoryDTO = new VMListCategory();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                categoryDTO.value = Convert.ToString(dt.Rows[i]["categoryID"].ToString());
                categoryDTO.label = Convert.ToString(dt.Rows[i]["name"].ToString());

                categoryList.Add(categoryDTO);
            }

            return categoryList;
        }
    }
}
