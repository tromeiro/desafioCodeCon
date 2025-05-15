import express from express;

const router = express.Router();

router.post('/users', (req, res) => {

    if(!req.file){
        res.status(400).json({ error: "Sem arquivo em anexo" }) 
    };

    res.status(201).json()

        
  }
});

router.get('/superusers', (req, res) => {
    
});



export default router;