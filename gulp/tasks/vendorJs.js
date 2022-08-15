export const vendorJs = () => {
    return app.gulp.src(app.path.src.vendorJs)
        .pipe(app.gulp.dest(app.path.build.js))
}