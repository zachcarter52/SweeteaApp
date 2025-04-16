import SwiftUI


struct MenuPage: View {
    @ObservedObject var productViewModel: ProductViewModel
    @ObservedObject var categoryViewModel: CategoryViewModel
    let imageHeight: CGFloat = 120

    var body: some View {
        NavigationStack {
            ScrollView {
                VStack(spacing: 16) {
                    
                    // Featured Items
                    FeaturedItemsView(viewModel: productViewModel, imageHeight: imageHeight)
                    
                    Divider().padding(.vertical, 8)

                    // Categories
                    CategoriesView(
                        viewModel: categoryViewModel,
                        productViewModel: productViewModel,
                        imageHeight: imageHeight
                    )

                    Divider().padding(.vertical, 8)

                }
                .padding()
            }
            .onAppear {
                Task {
                    await categoryViewModel.loadCategories()
                    await productViewModel.loadProducts()
                }
            }
        }
    }
}

struct FeaturedItemsView: View {
    @ObservedObject var viewModel: ProductViewModel
    let imageHeight: CGFloat

    var body: some View {
        VStack(alignment: .leading) {
            Text("Featured Items")
                .font(.title2)
                .fontWeight(.semibold)
                .padding(.bottom, 8)

            ScrollView(.horizontal, showsIndicators: false) {
                HStack(spacing: 16) {
                    ForEach(viewModel.featuredItems, id: \.id) { product in
                        ProductView(product: product, imageHeight: imageHeight)
                            .frame(width: imageHeight * 1.2) // Featured item width
                            .background(Color.white)
                            .cornerRadius(16)
                            .shadow(radius: 8)
                            .padding([.top, .bottom], 8)
                    }
                }
            }
        }
    }
}




