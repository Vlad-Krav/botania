<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\Persistence\ManagerRegistry;
use App\Entity\Tipo;
use App\Entity\Plant;

class PlantController extends AbstractController {

    public function __constructor(ManagerRegistry $doctrine) {}

    #[Route('/plant-new', name: 'app_plant_new', methods:"post")]
    public function plantNew(ManagerRegistry $doctrine, Request $request) {
        $data = $request->getContent();
        $content = json_decode($data);

        $em = $doctrine->getManager();

        $plant = new Plant();
        $plant->setDescripcion($content->descripcion);
        $plant->setDescripcionCorta($content->descripcionCorta);
        $plant->setImagen($content->imagen);
        $plant->setNombre($content->nombre);
        $plant->setValoracion($content->valoracion);

        $tipo = $doctrine->getRepository(Tipo::class)->findOneBy([
            "nombre" => $content->tipo
        ]);

        if ($tipo == null) {
            $tipo = new Tipo();
            $tipo->setNombre($content->tipo);
            $em->persist($tipo);
        }

        $plant->setTipo($tipo);
        $em->persist($plant);
        $em->flush();

        return $this->json([
            $data
        ]);
    }

    #[Route('/plant-list', name: 'app_plant_list', methods:"get")]
    public function plantList(ManagerRegistry $doctrine): JsonResponse {
        $plants = $doctrine->getRepository(Plant::class)->findAll();
        $plants_json = [];
        $tmp = [];
        foreach ($plants as $plant) {
            $tmp[] = [
                "id" => $plant->getId(),
                "nombre" => $plant->getNombre(),
                "valoracion" => $plant->getValoracion(),
                "descripcionCorta" => $plant->getDescripcionCorta(),
                "descripcion" => $plant->getDescripcion(),
                "tipo" => $plant->getTipo()->getNombre(),
                "imagen" => $plant->getImagen()
            ];
        }
        $plants_json[] = $tmp;
        return $this->json([
            $plants_json
        ]);
    }

    #[Route('/plant-edit', name: 'app_plant_edit', methods:"put")]
    public function plantEdit(ManagerRegistry $doctrine, Request $request): JsonResponse {
        $em = $doctrine->getManager();

        $data = $request->getContent();
        $content = json_decode($data);
        
        $plant = $doctrine->getRepository(Plant::class)->findOneBy([
            "id" => $content->id
        ]);

        if ($plant == null){
            return $this->json([
                "message" => "No puedes editar una planta que no existe" 
            ]);
        }

        $plant->setDescripcion($content->descripcion);
        $plant->setDescripcionCorta($content->descripcionCorta);
        $plant->setImagen($content->imagen);
        $plant->setNombre($content->nombre);
        $plant->setValoracion($content->valoracion);

        $tipo = $doctrine->getRepository(Tipo::class)->findOneBy([
            "nombre" => $content->tipo
        ]);

        // TODO generar los tipos por defecto en la bdd y combobox en angular
        if ($tipo == null) {
            $tipo = new Tipo();
            $tipo->setNombre($content->tipo);
            $em->persist($tipo);
        }

        $plant->setTipo($tipo);

        $em->persist($plant);
        $em->flush();

        return $this->json([
            "message" => "Editado correctamente"
        ]);
    }
    
    #[Route('/plant-byid/{id}', name: 'app_plant_byid', methods:"get")]
    public function plantById($id, ManagerRegistry $doctrine): JsonResponse {
        $plant = $doctrine->getRepository(Plant::class)->findOneBy([
            "id" => $id
        ]);

        $plant_json = [
            "id" => $plant->getId(),
            "nombre" => $plant->getNombre(),
            "valoracion" => $plant->getValoracion(),
            "descripcionCorta" => $plant->getDescripcionCorta(),
            "descripcion" => $plant->getDescripcion(),
            "tipo" => $plant->getTipo()->getNombre(),
            "imagen" => $plant->getImagen()
        ];

        return $this->json([
            $plant_json
        ]);
    }
    
    #[Route('/plant-delete/{id}', name: 'app_plant_delete', methods:"delete")]
    public function plantDelete($id, ManagerRegistry $doctrine) {
        $em = $doctrine->getManager();

        $plant = $doctrine->getRepository(Plant::class)->findOneBy([
            "id" => $id
        ]);
        
        $em->remove($plant);
        $em->flush();

        return $this->json([
            "message" => "Eliminado correctamente"
        ]);
    }
}
