using BO.Mapping;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Mapping
{
    public class ProductToCategoryDAL
    {
        DBConnection DB;
        public ProductToCategoryDAL()
        {
            DB = new DBConnection();
        }
        public List<ProductToCategoryBO> getAllmappingProductCategory()
        {
            string procedure = "getAllmappingProductCategory";
            List<ProductToCategoryBO> productList = new List<ProductToCategoryBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();
            ProductToCategoryBO productDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                productDTO = new ProductToCategoryBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
               
                productDTO.productID = Convert.ToString(dt.Rows[i]["productID"].ToString());
                productDTO.categoryID = Convert.ToString(dt.Rows[i]["categoryID"].ToString());
               
                productList.Add(productDTO);
            }

            return productList;
        }
        public async Task< bool> insertProductToCategory(string productID, string categoryID)
        {
            string procedure = "insertProductToCategory";
            List<ProductToCategoryBO> productList = new List<ProductToCategoryBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@productID", productID);
            com.Parameters.AddWithValue("@categoryID", categoryID);

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
