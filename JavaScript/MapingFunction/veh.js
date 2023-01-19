var vehicles=new Map();
        let cars=["benz","audi","thar","lambo"]
        let bikes=["fz","rx100","cd100","spelendor"]

        vehicles.set("cars",[cars])
        console.log(vehicles)
        vehicles.set("bikes",[bikes])
        console.log(vehicles)

        console.log(vehicles.get("cars"))

        vehicles.delete("cars");
        console.log(vehicles)