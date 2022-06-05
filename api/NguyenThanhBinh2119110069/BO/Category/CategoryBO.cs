using BO.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.Category
{
    public class CategoryBO
    {

        public string categoryID { get; set; }
        public string name { get; set; }
        public string slug { get; set; }
        public int status { get; set; }
        public DateTime createdDate { get; set; }
        public int createdBy { get; set; }
        public DateTime updatedDate { get; set; }
        public int updatedBy { get; set; }
        public List<ProductBO> productBO { get; set; }
        public string value { get; set; }
        public string label { get; set; }

    }
}
