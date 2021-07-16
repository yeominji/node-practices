module.exports = {
    create: async function(req, res, next) {
        console.log(req.body);
        // sql insert
        res.status(200).send({
            result: 'success',
            data: Object.assign(req.body, {
                no: 10,
                password: '',
                regDate: new Date()
            }),
            message: null
        });
    }
}
read :async function(req,res,next){
    const startNo =req.qurey.sno || 0;
    console.log(startNo);
    //sql :select ...;imit
    res.status(200).send({
        result:'success',
        data[{
            no:9,
            name:'dooly',
            message:'호이',
            regDate:new Date()
        }]
        message:''
    });

}