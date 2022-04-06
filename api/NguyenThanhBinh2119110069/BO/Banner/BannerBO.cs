using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BO.Banner
{
    public class BannerBO
    {
        public int id  {get; set;}
        public string name {get; set;}
        public string imgDesktop { get; set;}
        public string urlImgDesktop { get; set;}
        public string imgTablet { get; set; }
        public string urlImgTablet { get; set; }
        public string imgMobile { get; set; }
        public string urlImgMobile { get; set; }
        public string url { get; set; }
        public string contentUrrl { get; set; }
        public string detail1 { get; set; }
        public string detail2 { get; set; }
        public int status { get; set; }

}
}
