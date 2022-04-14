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
        public List<ProductBO> getProductNewTopX(int SL)
        {
            ProductDAL objProduct = new ProductDAL();
            List<ProductBO> listProduct = objProduct.getProductNewTopX(SL);
            return listProduct;
        }
        public List<ProductBO> getLoadProductByBrandTopX(int SL, string Brand)
        {
            ProductDAL objProduct = new ProductDAL();
            List<ProductBO> listProduct = objProduct.getLoadProductByBrandTopX(SL, Brand);
            return listProduct;
        }
    }
}
