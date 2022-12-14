
        import header from "/assets/header.component.638065378913190000.js";import footer from "/assets/footer.component.638065378913190000.js";import abouttezjs from "/assets/about_tezjs.component.638065378913190000.js";
        import main from "/assets/main.layout.638065378913190000.js";
        window.TEZ_DATA =  function(registerTezPage,preload){
            const payload = {"url":"/about-tezjs","slots":{"default":[{"name":"about-tezjs","data":{"componentName":"about-tezjs"},"id":"0-about-tezjs"}]},"masterPageSlots":{"header":[{"name":"header","data":{"componentName":"header","dynamicSourcePath":"collections/categories"},"id":"0-header"}],"footer":[{"name":"footer","data":{"componentName":"footer"},"id":"1-footer"}]},"tags":{"title":"About TezJS","canonical":"http://localhost:3000/about-tezjs","metaTag":{"name":{"viewport":"width=device-width, initial-scale=1.0","description":"Brief Insight on TezJS"},"property":{"og:locale":"en_US","og:type":"website"}}},"layoutName":"main"}; 
            registerTezPage({
                components:{"header":header,"footer":footer,"about-tezjs":abouttezjs,},
                masterPage:{"main":main,},
                payload:payload,
                postScript: ()=> preload(()=> import('./post.638065378913190000.js'),[])
            })
        }    