import React from "react";
import {
  Container,
  Filters,
  Title,
  TopBar,
  ProductsGroupList,
  Stories,
} from "@/shared/components/shared";
import { Suspense } from "react";
import { GetSearchParams, findPizzas } from "@/shared/lib/find-pizzas";
import { CarouselPlugin } from "@/shared/components/shared/slider";
interface HomeProps {
  searchParams: GetSearchParams;
}

const Home: React.FC<HomeProps> = async ({ searchParams }) => {
  const categories = await findPizzas(searchParams);

  return (
    <>
      <Container className="mt-5">
        <CarouselPlugin />
        <Stories />
        <Title text="Популярные" size="lg" className="font-bold" />
        <TopBar
          categories={categories.filter(
            (category) => category.products.length > 0
          )}
        />
      </Container>
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          <div className="w-[250px] ">
            <Suspense>
              <Filters />
            </Suspense>
          </div>

          <div className="flex-1">
            <div className="flex flex-col gap-16">
              {categories.map(
                (category) =>
                  category.products.length > 0 && (
                    <ProductsGroupList
                      key={category.id}
                      title={category.name}
                      categoryId={category.id}
                      items={category.products}
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};



export default Home;