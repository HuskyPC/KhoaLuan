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
        // trang detail 

        public ProductBO getProductDetail(string productID)
        {
            string procedure = "getProductDetail";
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
                productDTO.shortDes = Convert.ToString(dt.Rows[i]["shortDes"].ToString());
                productDTO.fullDes = Convert.ToString(dt.Rows[i]["fullDes"].ToString());
                productDTO.slug = Convert.ToString(dt.Rows[i]["slug"].ToString());
                productDTO.brandID = Convert.ToString(dt.Rows[i]["brandID"].ToString());
               
                productList.Add(productDTO);
            }

            return productList[0];
        }

        /// trang admin 
        public int getMaxSttProduct()
        {
            string procedure = "getMaxSttProduct";
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
            int stt = 0;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                stt = Convert.ToInt32(dt.Rows[i]["MaxStt"].ToString());
            }
            return stt;
        }
        public string getNewProductIDByStt(int a)
        {
            string procedure = "getProductIDByStt";
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
                stt = Convert.ToString(dt.Rows[i]["ProductID"].ToString());
            }
            int id = Convert.ToInt32(stt.Substring(2, stt.Length-2));
            id++;
            stt = "SP" + id.ToString();
            return stt;
        }
        public async Task<bool> postCreateProductAdmin(ProductBO objProduct)
        {
            string procedure = "postCreateProduct";
            List<ProductBO> productList = new List<ProductBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.AddWithValue("@productID", objProduct.ProductID);
            com.Parameters.AddWithValue("@name", objProduct.name);
            com.Parameters.AddWithValue("@price", objProduct.price);
            com.Parameters.AddWithValue("@priceSale", objProduct.priceSale);
            com.Parameters.AddWithValue("@avatar", objProduct.avatar);
            com.Parameters.AddWithValue("@brandID", objProduct.brandID);
            com.Parameters.AddWithValue("@slug", objProduct.slug);
            com.Parameters.AddWithValue("@shortDes", objProduct.shortDes);
            com.Parameters.AddWithValue("@fullDes", objProduct.fullDes);
            com.Parameters.AddWithValue("@status", objProduct.status);
            com.Parameters.AddWithValue("@createdDate", objProduct.ProductID);
            com.Parameters.AddWithValue("@createdBy", 1);
            com.Parameters.AddWithValue("@amount", objProduct.amount);

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

