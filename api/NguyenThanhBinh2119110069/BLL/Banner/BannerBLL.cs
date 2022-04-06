using BO.Banner;
using DAL.Banner;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Banner
{
    public class BannerBLL
    {
        public List<BannerBO> loadBannerAll()
        {
            BannerDAL objProduct = new BannerDAL();
            List<BannerBO> listProduct = objProduct.loadBannerAll();
            return listProduct;
        }
    }
}
