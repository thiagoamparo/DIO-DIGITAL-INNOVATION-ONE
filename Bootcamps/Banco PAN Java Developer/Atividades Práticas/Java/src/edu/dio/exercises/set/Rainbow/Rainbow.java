package edu.dio.exercises.set.Rainbow;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.TreeSet;

public class Rainbow {

    public static void main(String[] args) {
        
        Set<String> colorsSet = new HashSet<String>();        

        colorsSet.add("Violeta");
        colorsSet.add("Anil");
        colorsSet.add("Azul");
        colorsSet.add("Verde");
        colorsSet.add("Amarelo");
        colorsSet.add("Laranja");
        colorsSet.add("Vermelho");

        Set<String> colorsTree = new TreeSet<String>(colorsSet);
        List<String> colorsLinked = new ArrayList<String>(colorsSet);
        
        System.out.println("Cores do Arco-Iris:\n");

        for (String color: colorsSet) {

            System.out.println(color);

        }

        System.out.println("\nTotal de Cores do Arco-Iris: " + colorsSet.size());

        System.out.println("\nCores do Arco-Iris (Alfabetica):\n");

        for (String color: colorsTree) {

            System.out.println(color);

        }

        System.out.println("\nCores do Arco-Iris (Inversa):\n");

        Collections.reverse(colorsLinked);

        for (String color: colorsLinked) {

            System.out.println(color);

        }

        System.out.println("\nCores do Arco-Iris (V):\n");

        for (String color: colorsSet) {

            if (color.startsWith("V")) {

                System.out.println(color);

            }

        }

        System.out.println("\nCores do Arco-Iris (Removidas):\n");

        for (String color: colorsLinked) {

            if (!color.startsWith("V")) {

                System.out.println(color);

                colorsSet.remove(color);

            }

        }

        colorsSet.clear();
        colorsTree.clear();
        colorsLinked.clear();

        System.out.println("\nArco-Iris Limpo: " + colorsSet.isEmpty());

    }
    
}