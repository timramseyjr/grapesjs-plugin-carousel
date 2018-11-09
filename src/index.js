import loadComponents from './components';
import loadBlocks from './blocks';

export default grapesjs.plugins.add('grapesjs-plugin-carousel', (editor, opts = {}) => {

    const options = {...{
                prefixName: 'bst-carousel',
                
                gridsCategory: 'Extra',
                
                autoplay: true,
                
                interval: 5000,
                
                slides: 3
        }, ...opts};

    // Add components
    loadComponents(editor, options);

    // Add blocks
    loadBlocks(editor, options);
});
