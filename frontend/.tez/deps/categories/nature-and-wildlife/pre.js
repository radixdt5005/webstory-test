
        import header from "/@/components/header.vue";import footer from "/@/components/footer.vue";import articles from "/@/components/articles.vue";
        import main from "/@/layouts/main.vue";
        export default function(registerTezPage,preload){
            const payload = {"url":"/categories/nature-and-wildlife","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/5584a8de3b8cc3816ae81bb7ee69c0a7"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Nature And Wildlife Category Articles","canonical":"http://localhost:3000/categories/nature-and-wildlife","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Nature And Wildlife Articles"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=>import("/tez/deps/categories/nature-and-wildlife/post.js")
            })
        }    