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
        public List<ProductBO> getTopNewProduct(int top)
        {
            string procedure = "getTopNewProduct";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            var Category = new SqlParameter("@top", top); // Tạo tham số
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
        public List<ProductBO> getProductAll()
        {
            string procedure = "getProductAll";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
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
                productDTO.brandID= Convert.ToString(dt.Rows[i]["brandID"].ToString());
                productList.Add(productDTO);
            }

            return productList;
        }
        public List<ProductBO> getProductByBrandID(String brandID)
        {
            string procedure = "getProductByBrandID";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);

            com.Parameters.AddWithValue("@brandID", brandID);

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
                productDTO.brandID = Convert.ToString(dt.Rows[i]["brandID"].ToString());
                productList.Add(productDTO);
            }

            return productList;
        }
        public List<ProductBO> getSearchProductFREETEXT(String search)
        {
            if (search != null)
            {
                string procedure = "getSearchProductFREETEXT";
                List<ProductBO> productList = new List<ProductBO>();
                SqlConnection con = DB.getConnection();
                SqlCommand com = new SqlCommand(procedure, con);
                com.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter da = new SqlDataAdapter(com);

                com.Parameters.AddWithValue("@x", search);

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
            else return null;
            
        }
        public List<ProductBO> getSearchProductLike(String search)
        {
            if (search != null)
            {
                string procedure = "getSearchProductLike";
                List<ProductBO> productList = new List<ProductBO>();
                SqlConnection con = DB.getConnection();
                SqlCommand com = new SqlCommand(procedure, con);
                com.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter da = new SqlDataAdapter(com);

                com.Parameters.AddWithValue("@x", search);

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
            else return null;

        }
        public List<ProductBO> getSearchProductExact(String search)
        {
            if (search != null)
            {
                string procedure = "getSearchProductExact";
                List<ProductBO> productList = new List<ProductBO>();
                SqlConnection con = DB.getConnection();
                SqlCommand com = new SqlCommand(procedure, con);
                com.CommandType = CommandType.StoredProcedure;
                SqlDataAdapter da = new SqlDataAdapter(com);

                com.Parameters.AddWithValue("@x", search);

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
            else return null;

        }
        //public List<ProductBO> getProductNewTopX(int SL)
        //{
        //    string procedure = "getProductNewTop";
        //    List<ProductBO> productList = new List<ProductBO>();
        //    SqlConnection con = DB.getConnection();
        //    SqlCommand com = new SqlCommand(procedure, con);
        //    com.CommandType = CommandType.StoredProcedure;

        //    var Category = new SqlParameter("@x", SL); // Tạo tham số
        //    com.Parameters.Add(Category);

        //    SqlDataAdapter da = new SqlDataAdapter(com);


        //    DataTable dt = new DataTable();

        //    con.Open();
        //    da.Fill(dt);//do du lieu vao datatable
        //    com.Dispose();//huy com
        //    con.Close();

        //    ProductBO productDTO;
        //    for (int i = 0; i < dt.Rows.Count; i++)
        //    {
        //        productDTO = new ProductBO();//doc 1 dong khoi tao ProductDTO
        //        //gan tung truong du lieu
        //        productDTO.ProductID = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
        //        productDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
        //        productDTO.price = Convert.ToDouble(dt.Rows[i]["price"].ToString());
        //        productDTO.priceSale = Convert.ToDouble(dt.Rows[i]["priceSale"].ToString());
        //        productDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
        //        productDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
        //        productList.Add(productDTO);
        //    }

        //    return productList;
        //}
        //public List<ProductBO> getLoadProductByBrandTopX(int SL, string Brand)
        //{
        //    string procedure = "getLoadProductByBrandTopX";
        //    List<ProductBO> productList = new List<ProductBO>();
        //    SqlConnection con = DB.getConnection();
        //    SqlCommand com = new SqlCommand(procedure, con);
        //    com.CommandType = CommandType.StoredProcedure;

        //    com.Parameters.AddWithValue("@x", SL);
        //    com.Parameters.AddWithValue("@nameBrand", Brand);


        //    SqlDataAdapter da = new SqlDataAdapter(com);


        //    DataTable dt = new DataTable();

        //    con.Open();
        //    da.Fill(dt);//do du lieu vao datatable
        //    com.Dispose();//huy com
        //    con.Close();

        //    ProductBO productDTO;
        //    for (int i = 0; i < dt.Rows.Count; i++)
        //    {
        //        productDTO = new ProductBO();//doc 1 dong khoi tao ProductDTO
        //        //gan tung truong du lieu
        //        productDTO.ProductID = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
        //        productDTO.name = Convert.ToString(dt.Rows[i]["name"].ToString());
        //        productDTO.price = Convert.ToDouble(dt.Rows[i]["price"].ToString());
        //        productDTO.priceSale = Convert.ToDouble(dt.Rows[i]["priceSale"].ToString());
        //        productDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
        //        productDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
        //        productList.Add(productDTO);
        //    }

        //    return productList;
        //}
    }
}

