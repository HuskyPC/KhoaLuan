using BO.Product;
using DAL.Product;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BLL.Product
{
    public class ProductBLL
    {
        public List<ProductBO> loadXProduct(int SL)
        {
            ProductDAL objProduct = new ProductDAL();
            List<ProductBO> listProduct = objProduct.loadXProduct(SL);
            return listProduct;
        }
    }
}
