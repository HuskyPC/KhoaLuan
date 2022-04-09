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
        public List<BrandBO> loadBrandTopX(int sl)
        {
            string procedure = "BrandHomeTopX";
            List<BrandBO> brandList = new List<BrandBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            var x = new SqlParameter("@x",sl ); // Tạo tham số
            com.Parameters.Add(x);

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
                brandList.Add(BrandDTO);
            }

            return brandList;
        }
    }
}
