import { useEffect, useState } from "react";
import { Swiper } from "swiper/types";

interface Args<Item> {
  initialItems: Array<Item>;
  initialSelectedIndex: number;
  createPrevItem: (item: Item) => Item;
  createNextItem: (item: Item) => Item;
  onSelectItem: (item: Item) => void;
}

export default function useInfiniteSwiper<Item>({
  initialItems,
  initialSelectedIndex,
  createPrevItem,
  createNextItem,
  onSelectItem,
}: Args<Item>) {
  const [items, setItems] = useState<Array<Item>>(initialItems);
  const [selectedIndex, setSelectedIndex] = useState(initialSelectedIndex);
  const [swiper, setSwiper] = useState<Swiper | null>(null);

  useEffect(() => {
    setItems(prevItems => {
      if (selectedIndex === 0) {
        setSelectedIndex(1);
        return [createPrevItem(prevItems[0]), ...prevItems];
      } else if (selectedIndex === prevItems.length - 1) {
        setSelectedIndex(prevItems.length - 1);
        return [...prevItems, createNextItem(prevItems[prevItems.length - 1])];
      } else {
        return prevItems;
      }
    });
  }, [selectedIndex, createPrevItem, createNextItem]);

  useEffect(() => {
    onSelectItem(items[selectedIndex]);

    if (swiper !== null) {
      swiper.slideTo(selectedIndex);
    }
  }, [selectedIndex, swiper, items, onSelectItem]);

  const swiperProps = {
    onSwiper: (newSwiper: Swiper) => {
      setSwiper(newSwiper);
    },
    onSlideChange: () => {
      if (swiper !== null) {
        setSelectedIndex(swiper.activeIndex);
      }
    },
  };

  return {
    items,
    selectedIndex,
    setSelectedIndex,
    swiperProps,
  };
}
