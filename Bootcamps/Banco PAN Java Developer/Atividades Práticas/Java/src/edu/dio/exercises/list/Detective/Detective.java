package edu.dio.exercises.list.Detective;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Detective {

    public static void main(String[] args) {

        Scanner scanner = new Scanner(System.in);

        List<String> questions = new ArrayList<String>();
        List<Character> answers = new ArrayList<Character>();

        int result = 0;

        questions.add("Telefonou para a vítima?");
        questions.add("Esteve no local do crime?");
        questions.add("Mora perto da vítima?");
        questions.add("Devia para a vítima?");
        questions.add("Já trabalhou com a vítima?");

        System.out.println("Responda minhas perguntas: \n");

        for (String question: questions) {

            System.out.println(question);

            answers.add(scanner.next().charAt(0));
            
        }

        for (Character answer: answers) {
            
            if (answer == 'S' || answer == 's') {
                
                result ++;
            
            }
        }

        if (result == 5) {

            System.out.println("ASSASINO!");

        } else if (result >= 3) {

            System.out.println("CUMPLICE!");

        } else if (result > 1) {

            System.out.println("SUSPEITO!");

        } else {

            System.out.println("INOCENTE!");

        }

        scanner.close();
        
    }
    
}
