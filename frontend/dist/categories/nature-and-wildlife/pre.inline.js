
        import header from "/assets/header.component.638065378913190000.js";import footer from "/assets/footer.component.638065378913190000.js";import articles from "/assets/articles.component.638065378913190000.js";
        import main from "/assets/main.layout.638065378913190000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/categories/nature-and-wildlife","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/5584a8de3b8cc3816ae81bb7ee69c0a7"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Nature And Wildlife Category Articles","canonical":"http://localhost:3000/categories/nature-and-wildlife","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Nature And Wildlife Articles"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.638065378913190000.js'),[])
            })
        }    