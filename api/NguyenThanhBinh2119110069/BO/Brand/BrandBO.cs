using BO.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.Brand
{
    public class BrandBO
    {
        public int id { get; set; }
        public String brandID { get; set; }
        public String name { get; set; }
        public String avatar { get; set; }
        public string parentID { get; set; }
        public String urlImage { get; set; }
        public String slug { get; set; }
        public int status { get; set; }
        public DateTime createdDate { get; set; }
        public int createdBy { get; set; }
        public DateTime updatedDate { get; set; }
        public int updatedBy { get; set; }
        public List<ProductBO> productBo { get; set; }
        //public BrandBO()
        //{
        //    productBo = new List<ProductBO>();
        //}

    }
}
