using BO.Product;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DAL.Product
{
    public class ProductDAL
    {
        DBConnection DB;
        public ProductDAL()
        {
            DB = new DBConnection();
        }
        public List<ProductBO> loadXProduct(int SL)
        {
            string procedure = "productItem";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            var Category = new SqlParameter("@x", SL); // Tạo tham số
            com.Parameters.Add(Category);

            SqlDataAdapter da = new SqlDataAdapter(com);

           
            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            ProductBO productDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                productDTO = new ProductBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                productDTO.ProductID = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
                productDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
                productDTO.CategoryName = Convert.ToString(dt.Rows[i]["CategoryName"].ToString());
                productDTO.price = Convert.ToDouble(dt.Rows[i]["price"].ToString());
                productDTO.priceSale = Convert.ToDouble(dt.Rows[i]["priceSale"].ToString());
                productDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
                productDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
                productList.Add(productDTO);
            }

            return productList;
        }
        public List<ProductBO> getProductNewTopX(int SL)
        {
            string procedure = "getProductNewTop";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            var Category = new SqlParameter("@x", SL); // Tạo tham số
            com.Parameters.Add(Category);

            SqlDataAdapter da = new SqlDataAdapter(com);


            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            ProductBO productDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                productDTO = new ProductBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                productDTO.ProductID = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
                productDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
                productDTO.price = Convert.ToDouble(dt.Rows[i]["price"].ToString());
                productDTO.priceSale = Convert.ToDouble(dt.Rows[i]["priceSale"].ToString());
                productDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
                productDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
                productList.Add(productDTO);
            }

            return productList;
        }
        public List<ProductBO> getLoadProductByBrandTopX(int SL, string Brand)
        {
            string procedure = "getLoadProductByBrandTopX";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            com.Parameters.AddWithValue("@x", SL);
            com.Parameters.AddWithValue("@nameBrand", Brand);


            SqlDataAdapter da = new SqlDataAdapter(com);


            DataTable dt = new DataTable();

            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            ProductBO productDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                productDTO = new ProductBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                productDTO.ProductID = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
                productDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
                productDTO.price = Convert.ToDouble(dt.Rows[i]["price"].ToString());
                productDTO.priceSale = Convert.ToDouble(dt.Rows[i]["priceSale"].ToString());
                productDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
                productDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
                productList.Add(productDTO);
            }

            return productList;
        }
    }
}//productDTO.slug = Convert.ToString(dt.Rows[i]["slug"].ToString());
 //productDTO.shortDes = Convert.ToString(dt.Rows[i]["shortDes"].ToString());
 //productDTO.fullDes = Convert.ToString(dt.Rows[i]["fullDes"].ToString());
 //productDTO.status = Convert.ToInt32(dt.Rows[i]["status"].ToString());
 //productDTO.createdDate = Convert.ToDateTime(dt.Rows[i]["createdDate"].ToString());
 //productDTO.createdBy = Convert.ToInt32(dt.Rows[i]["createdBy"].ToString());
 //productDTO.updatedDate = Convert.ToDateTime(dt.Rows[i]["updatedDate"].ToString());
 //productDTO.updatedBy = Convert.ToInt32(dt.Rows[i]["updatedBy"].ToString());

