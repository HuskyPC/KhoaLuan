using BO.User;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;

namespace DAL.User
{
    public class UserDAL
    {
        DBConnection DB;
        public UserDAL()
        {
            DB = new DBConnection();
        }
        public async Task<bool> postCreateUser(UserBO user)
        {
            string procedure = "postCreateUsser";
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            com.Parameters.AddWithValue("@email", user.email);
            com.Parameters.AddWithValue("@password", user.password);
            com.Parameters.AddWithValue("@lastName", user.lastName);
            com.Parameters.AddWithValue("@fristName", user.fristName);
            com.Parameters.AddWithValue("@status", 1);
            com.Parameters.AddWithValue("@access", 0);
            com.Parameters.AddWithValue("@createdDate", DateTime.Now.ToString("MM/dd/yyyy"));
            com.Parameters.AddWithValue("@createdBy", 1);
            con.Open();
            var result = com.ExecuteNonQuery();
            con.Close();

            if (result > 0)
            {
                return true;
            }
            return false;
        }
        public List<UserBO> postLoginUser(UserBO user)
        {

            string procedure = "postLoginUser";
            List<UserBO> UserList = new List<UserBO>();
            SqlConnection con = DB.getConnection();
            SqlCommand com = new SqlCommand(procedure, con);
            com.CommandType = CommandType.StoredProcedure;

            com.Parameters.AddWithValue("@email", user.email);
            com.Parameters.AddWithValue("@password", user.password);
            SqlDataAdapter da = new SqlDataAdapter(com);
            DataTable dt = new DataTable();
            con.Open();
            da.Fill(dt);//do du lieu vao datatable
            com.Dispose();//huy com
            con.Close();

            UserBO userDTO;
            for (int i = 0; i < dt.Rows.Count; i++)
            {
                userDTO = new UserBO();//doc 1 dong khoi tao ProductDTO
                //gan tung truong du lieu
                userDTO.userID = Convert.ToInt32(dt.Rows[i]["userID"].ToString());
                userDTO.lastName = Convert.ToString(dt.Rows[i]["lastName"].ToString());
                userDTO.fristName = Convert.ToString(dt.Rows[i]["fristName"].ToString());
                userDTO.avatar = Convert.ToString(dt.Rows[i]["avatar"].ToString());
                userDTO.urlImage = Convert.ToString(dt.Rows[i]["urlImage"].ToString());
                userDTO.access = Convert.ToInt32(dt.Rows[i]["access"].ToString());
                UserList.Add(userDTO);
            }

            return UserList;

        }
    }

}
