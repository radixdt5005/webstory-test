
        import header from "/assets/header.component.638065342506800000.js";import footer from "/assets/footer.component.638065342506800000.js";import articles from "/assets/articles.component.638065342506800000.js";
        import main from "/assets/main.layout.638065342506800000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/categories/adventure","slots":{"default":[{"name":"articles","data":{"componentName":"articles","dynamicSourcePath":"filter-collections/c271ac8fdea08f05b257c673efcc7cb7"},"id":"0-articles"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"Adventure Category Articles","canonical":"http://localhost:3000/categories/adventure","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Adventure Articles"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"articles":articles,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.638065342506800000.js'),[])
            })
        }    