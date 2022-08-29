



    function LoadMarca() {


        $.ajax({
            type: 'POST',
            url: 'https://apitestcotizamatico.azurewebsites.net/api/catalogos',
            dataType: 'json',
            data: { NombreCatalogo: "Marca", Filtro: "1", IdAplication: 2 },
            success: function(result) {
                $("#ddlMarca").append('<option value="0">' + 'Seleccione una opción' + '</option>');
                $.each(JSON.parse(result.CatalogoJsonString), function(i, result) {
                    $("#ddlMarca").append('<option value="'
                        + result.iIdMarca + '">'
                        + result.sMarca + '</option>');
                });
            },
            error: function(ex) {
                alert('Failed.' + ex);
            }
        });


    }


    $(document).ready(function() {

        LoadMarca();

        $("#ddlMarca").change(function() {
            $("#ddlSubmarca").empty();
            $.ajax({
                type: 'POST',
                url: 'https://apitestcotizamatico.azurewebsites.net/api/catalogos',
                dataType: 'json',
                data: { NombreCatalogo: "Submarca", Filtro: "2", IdAplication: 2 },
                success: function(result) {
                    $("#ddlSubmarca").append('<option value="0">' + 'Seleccione una opción' + '</option>');
                    $.each(JSON.parse(result.CatalogoJsonString), function(i, result) {
                        $("#ddlSubmarca").append('<option value="'
                            + result.iIdSubMarca + '">'
                            + result.sSubMarca + '</option>');
                    });
                },
                error: function(ex) {
                    alert('Failed.' + ex);
                }
            });
        });

        $("#ddlSubmarca").change(function() {
            $("#ddlModelo").empty();
            $.ajax({
                type: 'POST',
                url: 'https://apitestcotizamatico.azurewebsites.net/api/catalogos',
                dataType: 'json',
                data: { NombreCatalogo: "Modelo", Filtro: "3", IdAplication: 2 },
                success: function(result) {
                    $("#ddlModelo").append('<option value="0">' + 'Seleccione una opción' + '</option>');
                    $.each(JSON.parse(result.CatalogoJsonString), function(i, result) {
                        $("#ddlModelo").append('<option value="'
                            + result.iIdModelo + '">'
                            + result.sModelo + '</option>');
                    });
                },
                error: function(ex) {
                    alert('Failed.' + ex);
                }
            });
        });

        $("#ddlModelo").change(function() {
            $("#DescripcionModelo").empty();
            $.ajax({
                type: 'POST',
                url: 'https://apitestcotizamatico.azurewebsites.net/api/catalogos',
                dataType: 'json',
                data: { NombreCatalogo: "DescripcionModelo", Filtro: "4", IdAplication: 2 },
                success: function(result) {
                    $("#DescripcionModelo").append('<option value="0">' + 'Seleccione una opción' + '</option>');
                    $.each(JSON.parse(result.CatalogoJsonString), function(i, result) {
                        $("#ddlDescripcionModelo").append('<option value="'
                            + result.iIdDescripcionModelo + '">'
                            + result.iIdModeloSubmarca + '</option>');
                    });
                },
                error: function(ex) {
                    alert('Failed.' + ex);
                }
            });
        });




        //-------------------------------------


        });
