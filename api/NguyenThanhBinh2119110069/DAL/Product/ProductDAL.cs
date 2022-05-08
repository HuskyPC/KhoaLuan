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
                da.Fill(dt);
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
<<<<<<< Updated upstream
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
=======
        public List<ProductBO> getProductID()
        {
            string procedure = "getProductID";
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
               
                productList.Add(productDTO);
            }

            return productList;
        }
        public List<ProductBO> getProductByID(string productID)
        {
            string procedure = "getProductByID";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);
            com.Parameters.AddWithValue("@productID", productID);
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
        public async Task<bool> postCreateProduct(ProductBO product)
        {
            string procedure = "postCreateProduct";
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            
            com.Parameters.AddWithValue("@ProductID", product.ProductID);
            com.Parameters.AddWithValue("@name", product.name);
            com.Parameters.AddWithValue("@price", product.price);
            com.Parameters.AddWithValue("@priceSale", product.priceSale);
            com.Parameters.AddWithValue("@avatar", product.avatar);
            com.Parameters.AddWithValue("@urlImage", product.urlImage);
            com.Parameters.AddWithValue("@brandID", product.brandID);
            com.Parameters.AddWithValue("@slug", product.slug);
            com.Parameters.AddWithValue("@shortDes", product.shortDes);
            com.Parameters.AddWithValue("@fullDes", product.fullDes);
            com.Parameters.AddWithValue("@status", 1);
            com.Parameters.AddWithValue("@createdDate", DateTime.Now.ToString("MM/dd/yyyy"));
            com.Parameters.AddWithValue("@createdBy", 1);
            await con.OpenAsync();
            var result = com.ExecuteNonQuery();
            await con.CloseAsync();

            if (result > 0)
            {
                return true;
            }
            return false;
        }
        public int getMaxID()
        {
            string procedure = "getMaxID";
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
                stt= Convert.ToInt32(dt.Rows[i]["MaxStt"].ToString());
            }

            return stt;
        }
        public string getProductIDByStt(int stt)
        {
            string procedure = "getProductIDByStt";
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();
            string  stts = "";
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                stts = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
            }
           int id  = Convert.ToInt32( stts.Substring(1,stts.Length-2 ));
            id++;
            string productID = "SP" + id.ToString();
            return productID;
        }
>>>>>>> Stashed changes
    }
}

