package edu.dio.exercises.list.AverageTemperature;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class AverageTemperature {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<String> months = new ArrayList<String>();
        List<Double> temperatures = new ArrayList<Double>();

        Double semesterAverage = 0d;

        months.add("Janeiro");
        months.add("Fevereiro");
        months.add("Março");
        months.add("Abril");
        months.add("Maio");
        months.add("Junho");
        months.add("Julho");
        months.add("Agosto");
        months.add("Setembro");
        months.add("Outubro");
        months.add("Novembro ");
        months.add("Dezembro ");

        for (int i=0; i<6; i++) {

            System.out.println("Digite a Temperatura do Mes de " + months.get(i) + ":");
    
            temperatures.add(scanner.nextDouble());
        }

        for (Double temperature: temperatures) {semesterAverage += temperature;}

        semesterAverage = semesterAverage / temperatures.size();

        System.out.println("\nTemperaturas Registradas: " + temperatures);
        System.out.printf("Média das Temperaturas Registradas: %.1f", semesterAverage);

        System.out.println("\n\nTemperaturas Acima da Media:\n");
        
        for (int i=0; i<temperatures.size(); i++) {
            
            if (temperatures.get(i) > semesterAverage) {

                System.out.println(" Mes: " + months.get(i) + " - Temperatura: " + temperatures.get(i));

            }
        
        } 

        scanner.close();
        
    }

}
