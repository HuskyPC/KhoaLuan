//using Microsoft.AspNetCore.Http.Internal;
using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.Product
{
    public class ProductBO
    {
        public String ProductID { get; set; }
        public String name { get; set; }
        public String brandID { get; set; }
        public Double price { get; set; }
        public Double priceSale { get; set; }
        public IFormFile file { get; set; }
        public List<IFormFile> Files { get; set; }
        public String avatar { get; set; }
        public String urlImage { get; set; }
        public String slug { get; set; }
        public string shortDes { get; set; }
        public string fullDes { get; set; }
        public int status { get; set; }
        public DateTime createdDate { get; set; }
        public int createdBy { get; set; }
        public DateTime updatedDate { get; set; }
        public int updatedBy { get; set; }
        public int amount { get; set; }
        //public List<String> CateID { get; set; }
        //public List<String> BrandID { get; set; }
        //public string TH { get; set; }
        //public HttpPostedFileBase ImagesUpload { get; set; }

    }
}
