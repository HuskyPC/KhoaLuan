export const initData = {
  datas: [
    {
      src: "/images/banners/bckg-1.jpg",
    },
    {
      src: "/images/banners/bckg-2.jpg",
    },
    {
      src: "/images/banners/bckg-3.jpg",
    },
    {
      src: "/images/banners/bckg-1.jpg",
    },
    {
      src: "/images/banners/bckg-2.jpg",
    },
    {
      src: "/images/banners/bckg-3.jpg",
    },
    {
      src: "/images/banners/bckg-1.jpg",
    },
    {
      src: "/images/banners/bckg-2.jpg",
    },
    {
      src: "/images/banners/bckg-3.jpg",
    },
    {
      src: "/images/banners/bckg-1.jpg",
    },
    {
      src: "/images/banners/bckg-2.jpg",
    },
    {
      src: "/images/banners/bckg-3.jpg",
    },
  ],
  index: 0,
};
export function reducer(prevState, { key, payload }) {
  switch (key) {
    case "set": {
      return {
        ...prevState,
        ...payload,
      };
    }
    default: {
      console.log(key, { prevState, error: "Không tồn tại action" });
      return {
        ...prevState,
      };
    }
  }
}
