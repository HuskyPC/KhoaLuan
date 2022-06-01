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
   public class ProductToImagesDAL
    {
        DBConnection DB;
        public ProductToImagesDAL()
        {
            DB = new DBConnection();
        }
        public bool insertProductToImages(string productID, string imagesID)
        {
            string procedure = "insertProductToImages";
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@productID", productID);
            com.Parameters.AddWithValue("@categoryID", imagesID);

            con.OpenAsync();
            var result = com.ExecuteNonQuery();

            con.CloseAsync();

            if (result > 0)
            {
                return true;
            }
            return false;
        }

    }
}
