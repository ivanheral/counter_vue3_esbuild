import ts from 'taskr-servor';
const dest = 'dist';

export async function clear(task) {
    await task.clear('dist/**/*.*')
}

export async function html(task) {
    await task.source(`src/html/index.html`).target(dest)
}

export async function dev(task) {
    await task.parallel(['clear', 'html', 'js']);
    await task.watch(`src/html/index.html`, 'html');
    await task.watch('src/app/**/*.*', 'js');
    ts.start({
        root: dest,
        port: 2000,
    });
}

export async function js(task) {
    await task.source(`src/app/**/*.{tsx,jsx,json,jpg,png}`).esbuild({
       esbuild: { minify: false }
    }).target(dest)
}